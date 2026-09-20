import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o5xzug5ed {
  fill: currentColor;
  d: path("M15 16h3q.425 0 .713-.288T19 15V9q0-.425-.288-.712T18 8h-3q-.425 0-.712.288T14 9v6q0 .425.288.713T15 16m1-2v-4h1v4zm-7 2h3q.425 0 .713-.288T13 15V9q0-.425-.288-.712T12 8H9q-.425 0-.712.288T8 9v6q0 .425.288.713T9 16m1-2v-4h1v4zm-5 2h2V8H5zm-3 4V4h20v16zM4 6v12zm0 12h16V6H4z");
}
</style><path class="o5xzug5ed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:money-outline"} {...others} />);
}

export default Component;
