import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/gl7s6cbtg.css';
import '../../css/t/ttwa5ubjw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="gl7s6cbtg"/><path class="ttwa5ubjw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:empty-wallet"} {...others} />);
}

export default Component;
