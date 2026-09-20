import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejki_ob7b.css';
import '../../css/i/igx7fitry.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ejki_ob7b"/><path class="igx7fitry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:git-repository-commits-filled"} {...others} />);
}

export default Component;
