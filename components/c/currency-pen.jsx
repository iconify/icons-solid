import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ovwmvqkna.css';
import '../../css/c/ch6gofp9q.css';
import '../../css/x/x2s0qejsf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ovwmvqkna"/><path class="ch6gofp9q"/><path class="x2s0qejsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:currency-pen"} {...others} />);
}

export default Component;
