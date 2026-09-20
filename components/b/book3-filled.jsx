import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/og69_74sa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="og69_74sa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:book3-filled"} {...others} />);
}

export default Component;
