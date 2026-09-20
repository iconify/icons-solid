import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpgduc.css';
import '../../css/y/ydovum.css';
import '../../css/h/h7e73s.css';
import '../../css/n/np9jsi.css';
import '../../css/g/gvxcin.css';
import '../../css/f/fadm7g.css';
import '../../css/k/kg9z0i.css';
import '../../css/s/sz4f0h.css';
import '../../css/b/butieh.css';
import '../../css/t/tr-53qnls.css';
import '../../css/t/tr-s3w9if.css';
import '../../css/s/so-to-0.css';
import '../../css/f/fill-to-1.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jpgduc ydovum"/><path class="h7e73s ydovum"/><path class="np9jsi ydovum"/><path class="gvxcin ydovum"/><path class="fadm7g ydovum"/><path class="kg9z0i ydovum"/><path class="sz4f0h ydovum"/><path class="butieh ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:soundcloud"} {...others} />);
}

export default Component;
