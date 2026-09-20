import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/s/s6r85vb-g.css';
import '../../css/m/m4l-9ybuj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="s6r85vb-g"/><circle class="m4l-9ybuj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:video"} {...others} />);
}

export default Component;
