import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pp5jjeb7y.css';
import '../../css/s/s2e-iwdfj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pp5jjeb7y"/><path class="s2e-iwdfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:receipt-search"} {...others} />);
}

export default Component;
