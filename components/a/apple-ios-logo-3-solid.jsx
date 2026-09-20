import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a4zutr5jq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a4zutr5jq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:apple-ios-logo-3-solid"} {...others} />);
}

export default Component;
