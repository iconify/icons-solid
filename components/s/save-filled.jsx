import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gcw1c79qb.css';
import '../../css/b/beeg7e7hg.css';
import '../../css/f/fv-cmacjm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gcw1c79qb"/><path class="beeg7e7hg"/><path class="fv-cmacjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:save-filled"} {...others} />);
}

export default Component;
