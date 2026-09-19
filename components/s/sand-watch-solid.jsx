import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3fu9pp5c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c3fu9pp5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:sand-watch-solid"} {...others} />);
}

export default Component;
