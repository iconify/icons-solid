import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k0syi2bkw.css';
import '../../css/n/n4g77lbcq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k0syi2bkw"/><path class="n4g77lbcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:television-check"} {...others} />);
}

export default Component;
