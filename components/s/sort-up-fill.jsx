import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae3m4ibfo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ae3m4ibfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:sort-up-fill"} {...others} />);
}

export default Component;
