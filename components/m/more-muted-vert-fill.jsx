import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6ioh9qho.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c6ioh9qho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:more-muted-vert-fill"} {...others} />);
}

export default Component;
