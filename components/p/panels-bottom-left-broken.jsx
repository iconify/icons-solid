import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tcg0b8fzd.css';
import '../../css/s/sma0a9bhx.css';
import '../../css/k/k-xqiwbqo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tcg0b8fzd"/><path class="sma0a9bhx"/><path class="k-xqiwbqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panels-bottom-left-broken"} {...others} />);
}

export default Component;
