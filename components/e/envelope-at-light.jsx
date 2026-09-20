import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djdujaclh.css';
import '../../css/p/pgkbw5buh.css';
import '../../css/e/eklvps3uq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="djdujaclh"/><path class="pgkbw5buh"/><path class="eklvps3uq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:envelope-at-light"} {...others} />);
}

export default Component;
