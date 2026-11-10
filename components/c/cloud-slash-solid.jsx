import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbd9w3y-h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jbd9w3y-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:cloud-slash-solid"} {...others} />);
}

export default Component;
