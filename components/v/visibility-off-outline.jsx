import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nb-4zccna.css';
import '../../css/y/ypq-gib4v.css';
import '../../css/s/s29qprbza.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nb-4zccna"/><path clip-rule="evenodd" class="ypq-gib4v"/><path clip-rule="evenodd" class="s29qprbza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:visibility-off-outline"} {...others} />);
}

export default Component;
