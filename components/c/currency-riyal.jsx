import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jz2c4cb9q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jz2c4cb9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:currency-riyal"} {...others} />);
}

export default Component;
