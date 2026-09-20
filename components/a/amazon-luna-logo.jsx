import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/e/e6m3ae0ep.css';
import '../../css/g/gmss5kbzw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="e6m3ae0ep"/><path class="gmss5kbzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:amazon-luna-logo"} {...others} />);
}

export default Component;
