import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ue82kj6gk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ue82kj6gk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:credit-card-x"} {...others} />);
}

export default Component;
