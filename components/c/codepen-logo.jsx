import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/h/haq9eoojl.css';
import '../../css/f/f0l68obgd.css';
import '../../css/w/wijxmabzw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="haq9eoojl"/><path class="f0l68obgd"/><path class="wijxmabzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:codepen-logo"} {...others} />);
}

export default Component;
