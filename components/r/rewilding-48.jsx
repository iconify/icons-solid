import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v03k1eb5i.css';
import '../../css/e/e3qo4yqzk.css';
import '../../css/c/c65-ehvfy.css';
import '../../css/w/wcooi19sy.css';
import '../../css/s/sok6v4bmv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v03k1eb5i"/><path class="e3qo4yqzk"/><path class="c65-ehvfy"/><path class="wcooi19sy"/><path class="sok6v4bmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rewilding-48"} {...others} />);
}

export default Component;
