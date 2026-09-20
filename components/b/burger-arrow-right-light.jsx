import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ee65k1lyy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ee65k1lyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:burger-arrow-right-light"} {...others} />);
}

export default Component;
