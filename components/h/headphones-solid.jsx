import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r6i2-jkox.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r6i2-jkox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:headphones-solid"} {...others} />);
}

export default Component;
