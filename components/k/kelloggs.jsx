import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/waihwabln.css';
import '../../css/c/cx6u3ccyv.css';
import '../../css/p/pxkiknbxp.css';
import '../../css/i/iz-n-j-1d.css';

const viewBox = {"width":1000,"height":349.652};
const content = `<defs><clipPath id="SVGkLVPNeys"><path class="waihwabln"/></clipPath></defs><g clip-path="url(#SVGkLVPNeys)" transform="matrix(10.3654 0 0 -10.3654 -4991.695 7836.742)" class="cx6u3ccyv"><path class="pxkiknbxp"/><path class="iz-n-j-1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kelloggs"} {...others} />);
}

export default Component;
