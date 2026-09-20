import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0cnu5b1f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0cnu5b1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:shoe-heel"} {...others} />);
}

export default Component;
