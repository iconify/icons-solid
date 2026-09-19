import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nn9-9y8lu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nn9-9y8lu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:asterisk"} {...others} />);
}

export default Component;
