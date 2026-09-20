import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tebjy0bqb.css';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z69-7fbuk.css';
import '../../css/j/jy5-5kb7n.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGq1vnPeix" class="tebjy0bqb"/></defs><g class="nrj6p8qat"><use href="#SVGq1vnPeix"/><use href="#SVGq1vnPeix"/><path class="z69-7fbuk"/><path class="jy5-5kb7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-livewire"} {...others} />);
}

export default Component;
