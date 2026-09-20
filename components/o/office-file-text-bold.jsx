import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zemhzbc5a.css';
import '../../css/r/r6fwiknyu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zemhzbc5a"/><path class="r6fwiknyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:office-file-text-bold"} {...others} />);
}

export default Component;
