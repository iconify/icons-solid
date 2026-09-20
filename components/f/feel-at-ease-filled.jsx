import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsr4q-iac.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qsr4q-iac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:feel-at-ease-filled"} {...others} />);
}

export default Component;
