import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z14bdvjpq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z14bdvjpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:package-dimension-bold"} {...others} />);
}

export default Component;
