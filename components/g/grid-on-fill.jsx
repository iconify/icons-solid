import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2iskrb7m.css';
import '../../css/y/y8vjolbgb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n2iskrb7m"/><path clip-rule="evenodd" class="y8vjolbgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:grid-on-fill"} {...others} />);
}

export default Component;
