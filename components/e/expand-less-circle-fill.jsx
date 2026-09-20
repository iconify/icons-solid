import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j8ltq07ep.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j8ltq07ep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:expand-less-circle-fill"} {...others} />);
}

export default Component;
