import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/almky1j9k.css';
import '../../css/d/dbq485b4e.css';
import '../../css/o/ocif-h9bu.css';
import '../../css/s/s_f6m4b-b.css';
import '../../css/a/ab4nn6sto.css';
import '../../css/z/z7y7pib1b.css';
import '../../css/u/u6tqcja1p.css';
import '../../css/e/e01qzyfmk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="almky1j9k"/><path class="dbq485b4e"/><path class="ocif-h9bu"/><path class="s_f6m4b-b"/><path class="ab4nn6sto"/><path class="z7y7pib1b"/><path class="u6tqcja1p"/><path class="e01qzyfmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:unamused-face"} {...others} />);
}

export default Component;
