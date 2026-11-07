import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vq0eybcdk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vq0eybcdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:face-id-solid"} {...others} />);
}

export default Component;
