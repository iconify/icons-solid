import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zq9z85bal.css';
import '../../css/x/xlo2ptjbm.css';
import '../../css/k/kemfy5bie.css';
import '../../css/e/eu-9hmdib.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zq9z85bal"/><path class="xlo2ptjbm"/><path clip-rule="evenodd" class="kemfy5bie"/><path class="eu-9hmdib"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:search-results-solid"} {...others} />);
}

export default Component;
