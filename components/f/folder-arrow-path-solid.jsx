import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c1a9-_b5g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c1a9-_b5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:folder-arrow-path-solid"} {...others} />);
}

export default Component;
