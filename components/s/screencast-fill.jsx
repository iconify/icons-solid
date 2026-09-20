import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mgbjmi6pp.css';
import '../../css/v/vmig3tl9v.css';
import '../../css/a/af2s08bbb.css';
import '../../css/g/g8foefw4k.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGfory69zG" class="mgbjmi6pp"/></defs><path class="vmig3tl9v"/><path class="af2s08bbb"/><use href="#SVGfory69zG"/><path class="g8foefw4k"/><use href="#SVGfory69zG"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:screencast-fill"} {...others} />);
}

export default Component;
