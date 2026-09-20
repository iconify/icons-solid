import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bcfumwk7h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bcfumwk7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:gas-station-fuel-petroleum-remix"} {...others} />);
}

export default Component;
