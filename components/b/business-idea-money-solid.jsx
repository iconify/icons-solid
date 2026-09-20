import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ggq3csbcs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ggq3csbcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:business-idea-money-solid"} {...others} />);
}

export default Component;
