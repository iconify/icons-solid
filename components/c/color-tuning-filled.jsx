import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r18p76buy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r18p76buy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:color-tuning-filled"} {...others} />);
}

export default Component;
