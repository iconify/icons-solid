import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ynl4qid9f.css';
import '../../css/q/qw3qyuo8w.css';
import '../../css/m/mlp3php0s.css';

const viewBox = {"width":57.6,"height":65};
const content = `<linearGradient id="SVGXqjWCeXI" x1="63.187" x2="-8.41" y1="171.884" y2="146.689" gradientTransform="matrix(1 0 0 -1 0 187.79)" gradientUnits="userSpaceOnUse"><stop offset="0" class="ynl4qid9f"/><stop offset="1" class="qw3qyuo8w"/></linearGradient><path fill="url(#SVGXqjWCeXI)" clip-rule="evenodd" class="mlp3php0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:pitch"} {...others} />);
}

export default Component;
