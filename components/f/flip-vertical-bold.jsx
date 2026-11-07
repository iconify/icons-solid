import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eb-4crb9y.css';
import '../../css/g/gydy3ndrg.css';
import '../../css/r/re_l3eb8a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eb-4crb9y"/><path class="gydy3ndrg"/><path clip-rule="evenodd" class="re_l3eb8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flip-vertical-bold"} {...others} />);
}

export default Component;
