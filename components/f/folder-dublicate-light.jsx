import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j73m3obrn.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/t/to-5kdesz.css';
import '../../css/l/l0bn-3b4l.css';
import '../../css/f/fckzwac5u.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGVWW5FbRM" class="j73m3obrn"/></defs><mask id="SVGNzmWYbOh" class="n1mjunbsu"><use href="#SVGVWW5FbRM"/></mask><g class="to-5kdesz"><use href="#SVGVWW5FbRM" mask="url(#SVGNzmWYbOh)" class="l0bn-3b4l"/><path class="fckzwac5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-dublicate-light"} {...others} />);
}

export default Component;
