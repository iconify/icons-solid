import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jaa9xgbbh.css';
import '../../css/q/q_br50bfg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jaa9xgbbh"/><path class="q_br50bfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:safari"} {...others} />);
}

export default Component;
