import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmennq3iv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pmennq3iv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:align-left-1-remix"} {...others} />);
}

export default Component;
