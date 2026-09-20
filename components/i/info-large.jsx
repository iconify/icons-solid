import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d37zg4ilz.css';
import '../../css/f/fe11hu57u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d37zg4ilz"/><circle class="fe11hu57u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:info-large"} {...others} />);
}

export default Component;
