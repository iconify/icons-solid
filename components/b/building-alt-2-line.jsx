import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukh3251yi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ukh3251yi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:building-alt-2-line"} {...others} />);
}

export default Component;
