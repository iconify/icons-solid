import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vafs9rb8t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vafs9rb8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:check-box-solid"} {...others} />);
}

export default Component;
