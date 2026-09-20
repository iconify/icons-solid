import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ty-u9tbdk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ty-u9tbdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:section-divider-solid"} {...others} />);
}

export default Component;
