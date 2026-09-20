import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/elywwxo3y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="elywwxo3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:water-straw-bold"} {...others} />);
}

export default Component;
