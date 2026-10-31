import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uh0q379oy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="uh0q379oy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:crown-solid"} {...others} />);
}

export default Component;
