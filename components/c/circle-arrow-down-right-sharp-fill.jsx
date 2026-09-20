import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpl7iyi0y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lpl7iyi0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-arrow-down-right-sharp-fill"} {...others} />);
}

export default Component;
