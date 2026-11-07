import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jol1kjm1u.css';
import '../../css/f/fxwq1cqvv.css';
import '../../css/t/tcadmdbou.css';
import '../../css/t/ts72lmbzc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jol1kjm1u"/><path class="fxwq1cqvv"/><path class="tcadmdbou"/><path class="ts72lmbzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wallet-money-bold-duotone"} {...others} />);
}

export default Component;
